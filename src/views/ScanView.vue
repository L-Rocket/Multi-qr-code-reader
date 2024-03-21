<template>
  <head>
    
  </head>
  <main>
    <div ref="MyPoints" style="
      position: absolute;
      top: 0px;
      left: 0px;">
      <video
        ref="videoEl"
      ></video> 
    </div>
    
    <el-button  v-loading.fullscreen.lock="fullscreenLoading" type="success" round  @click="Back" style="position: absolute; bottom: 30px;">返回</el-button>
    <audio ref="audioElement" src="/alert.mp3" preload="auto"></audio>
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, h,   } from 'vue';
import { scan } from 'qr-scanner-wechat'
import { ElNotification, ElLoading } from 'element-plus'
const MyPoints = ref<HTMLElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);
const audioElement = ref<HTMLAudioElement | null>(null);
let nIntervId: number | null | undefined = null;
let resultMap = new Map();
import { useRouter } from 'vue-router';
const router = useRouter();
import { useStore } from 'vuex';

const store = useStore();

const sendlists :string[] =[]
const sendData = () => {
  store.commit('setData', sendlists);
};
const Back = async()=>{
  await stop();
  sendData();
  router.push('/');
}



const fullscreenLoading = ref(false)


const checkCamera = async (facingMode: string, width : number, height : number, statusww : boolean) => {
  const navigator = window.navigator.mediaDevices;
  const devices = await navigator.enumerateDevices();
  if (devices) {
    try {
      if (statusww)
      {
        const stream = await navigator.getUserMedia({
        audio: false,
        video: {
          facingMode: facingMode,
        },
        });
        if (videoEl.value) {
        videoEl.value.srcObject = stream;
        videoEl.value.play();
        }
      }else{
        const stream = await navigator.getUserMedia({
        audio: false,
        video: {
          width : width,   //window.innerWidth
          height : height, //window.innerHeight
          facingMode: facingMode,
        },
        });
        if (videoEl.value) {
        videoEl.value.srcObject = stream;
        videoEl.value.play();
      }
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }
};

onBeforeMount(async () => {
  // await checkCamera("environment",0,0,true); // 打开后置摄像头 environment
  fullscreenLoading.value = true
  await setTimeout(() => {
    fullscreenLoading.value = false
  }, 1000)
  await setTimeout(() => {
  }, 100)
});

onMounted(  async () => {
  await checkCamera("environment",window.innerHeight,window.innerWidth,false);
  await setTimeout(start, 500); // 3000 毫秒等于 3 秒
});

const changeWindows = async ()=>{
  let wi : number , hi : number;
    if (!videoEl.value) return;
    if (window.innerWidth < videoEl.value.videoWidth && window.innerHeight < videoEl.value.videoHeight) {
    // 执行你的条件判断下的逻辑
      wi = window.innerWidth;
      hi = window.innerHeight;
      
    }else{
      const x =   window.innerHeight / window.innerWidth;
      // const m = videoEl.value.videoWidth / window.innerWidth;
      const n =  window.innerHeight / videoEl.value.videoHeight;
      wi = x * videoEl.value.videoWidth * n;
      hi = videoEl.value.videoHeight * n;
    }
    await checkCamera("environment",wi,hi,false);
}
const stop = async () => {
  await clrCavans();
  if (nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
  }
};


const clrCavans = () => {
  const videoCanvases = document.querySelectorAll("canvas");
  videoCanvases.forEach(canvas => {
    const ctx = canvas.getContext("2d");
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
};

const alertM = (inf: string) => {
  playSound();
  ElNotification({
    title: '检测到新二维码：',
    message: h('i', { style: 'color: teal' }, inf),
  })
};

const playSound = () => {
  // 确保音频元素存在
  if (audioElement.value) {
    audioElement.value.play();
  }
};


const createCanvasAndSnapshot = async () => {
  if (!videoEl.value) return null;

  let VideoCanvas = document.createElement("canvas");
  VideoCanvas.style.position = "absolute"; // 修改为绝对定位
  VideoCanvas.style.left = "0px"; // 相对于页面左上角的位置
  VideoCanvas.style.top = "0px";

  VideoCanvas.width = videoEl.value.videoWidth;
  VideoCanvas.height = videoEl.value.videoHeight;

  let ctx = VideoCanvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
  ctx.strokeStyle = "red";
  
  let value = { VideoCanvas, ctx }
  return value;
};
const processSnapshoot = async (
  VideoCanvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D | null
) => {
  if (!videoEl.value || ctx === null) return;

  const snapshoot = document.createElement("canvas");
  snapshoot.width = videoEl.value.videoWidth;
  snapshoot.height = videoEl.value.videoHeight;
  snapshoot.style.position = "absolute"; // 绝对定位
  snapshoot.style.left = "0px"; // 相对于页面左上角的位置
  snapshoot.style.top = "0px";
  const ctx2 = snapshoot.getContext("2d");
  if (!ctx2) return;
  ctx2.drawImage(videoEl.value, 0, 0, VideoCanvas.width, VideoCanvas.height);
  ctx2.fillStyle = "rgba(255, 255, 0, 1)";
  ctx.font = "bold 20px Roboto";
  while(true) {
    const result = await scan(snapshoot);
    if (!result || !result.rect || !result.text) break;
    console.log("result", result.text);
    const { x, y, height, width } = result.rect;
    ctx2.fillRect(x, y, width, height);
    ctx.fillRect(x, y, width, height); 
    ctx.strokeRect(x, y, width, height); 

    ctx.fillStyle = "black";
    ctx.fillText(result.text, x, y);
    ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
    if (!resultMap.has(result.text)) {
      resultMap.set(result.text, result.rect);
      sendlists.push(result.text);
      console.log("result.text", result.text);
      alertM(result.text);
    }
    
  }
  // console.log("resultMap", resultMap);
  if (!MyPoints.value) return;
  await MyPoints.value.appendChild(VideoCanvas);
};


const start = async () => {
  
  const value  = await createCanvasAndSnapshot();
  if (!value) {
    console.error("Failed to create canvas and snapshot.");
    return;
  }
  nIntervId = setInterval(async () => {
    await clrCavans();
    await processSnapshoot(value.VideoCanvas, value.ctx);
  }, 10); //100毫秒执行一次
};

</script>

<style lang="less">

.scan-box {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 5000px;
}
.scanning {
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    80%,
    rgba(96, 165, 250, 0.8)
  );
  animation: move 2s linear infinite;
  -webkit-animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    transform: translateY(-126px);
  }
  100% {
    transform: translateY(400px);
  }
}
#my-video{
 object-fit: cover;
 object-position: center center;
}
</style>
