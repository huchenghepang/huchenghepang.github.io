<script >
export default {
    data(){
        return {
            istransitioning:false,
            currentIndex:1,
            dots:{},
            slides:{},
            totalSlides:3,
            isShowPreview:false,
            preViewImgSrc:"",
        }
    },
    methods:{
        moveSlide(direction){
            if(this.istransitioning) return
            this.istransitioning = true;
            this.currentIndex += direction;
            // console.log(currentIndex);
            this.slides.style.transition = "transform 0.5s ease-in-out";
            this.slides.style.transform = `translateX(-${this.currentIndex*100}%)`;
            this.slides.addEventListener("transitionend",this.handleTransitionEnd)
            this.updateDots()
    },
        handleTransitionEnd(){
        this.slides.removeEventListener("transitionend",this.handleTransitionEnd);
        this.istransitioning = false;
        if(this.currentIndex===0){
            // 处理从第一张移动到最后一张时候的情况
            this.currentIndex = this.totalSlides-2;
            // 这样设置是为了使得移动图片的时候用户察觉不到
            this.slides.style.transition = "none";
            this.slides.style.transform =  `translateX(-${this.currentIndex*100}%)`;
        }
        if(this.currentIndex===this.totalSlides-1){
            // 处理从最后一张移动到第一张时候的情况
            this.currentIndex =1;
            this.slides.style.transition = "none";
            this.slides.style.transform =  `translateX(-${this.currentIndex*100}%)`;
        }
        this.updateDots()
    },
       updateDots(){
    // console.log(dots);
    this.dots.forEach((dot,index)=>{
        // 设置当前图片的圆点
        if(index==this.currentIndex-1){
            dot.classList.add("active");
        }else{
            dot.classList.remove("active");
        }
    })
},
   setSlide(index){
    if(this.istransitioning) return
    this.istransitioning = true;
    this.currentIndex = index;
    // console.log(currentIndex);
    this.slides.style.transition = "transform 0.5s ease-in-out";
    this.slides.style.transform = `translateX(-${this.currentIndex*100}%)`;
    this.slides.addEventListener("transitionend",this.handleTransitionEnd)
    this.updateDots()
},
        closePreview(){
            this.isShowPreview = false;
            this.preViewImgSrc = ""
        },
        activePreviewImg($event){
            if(event.target.nodeName =="IMG"){
                this.preViewImgSrc =event.target.getAttribute("src");
                this.isShowPreview = true;
            }

            // this.preViewImgSrc = event.target
        },
        },

        mounted() {
            this.dots = document.querySelectorAll(".dot");
            this.slides = document.querySelector(".sildes");
            this.totalSlides = this.slides.children.length;
            setInterval(() => {
                this.moveSlide(1);
            }, 3000);
            this.updateDots()
        }
}

</script>

<template>
        <div class="carousel">
            <div class="sildes" @click="activePreviewImg">
                <div class="silde"><img src="../public/img/carousel/image3.png" alt="图片1"></div>
                <div class="silde"><img src="../public/img/carousel/image1.png" alt="图片2"></div>
                <div class="silde"><img src="../public/img/carousel/image2.png" alt="图片3"></div>
                <div class="silde"><img src="../public/img/carousel/image3.png" alt="图片4"></div>
                <div class="silde"><img src="../public/img/carousel/image1.png" alt="图片5"></div>
            </div>
            <button class="prev" @click="moveSlide(-1)">&#10094;</button>
            <button class="next" @click="moveSlide(1)">&#10095;</button>
            <div class="dots">
                <div class="dot" @click="setSlide(1)"></div>
                <div class="dot" @click="setSlide(2)"></div>
                <div class="dot" @click="setSlide(3)"></div>
            </div>
            <div id="imagePreview" class="preview" v-show="isShowPreview">
                <span class="close" @click="closePreview">&times;</span>
                <img class="preview-content" id="previewImg" :src="preViewImgSrc">
            </div>
        </div>
</template>

<style scoped lang="scss">
.carousel{
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.sildes{
    display: flex;
    transition: tranform 0.5s ease-in-out;
    transform: translateX(-100%);
}

.silde{
    /* 设置元素的最小宽度 */
    min-width: 100%;
    box-sizing: border-box;

}

.silde img{
    width: 100%;
}

.prev,.next{
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    color:azure;
    cursor:pointer;
    border: none;
    padding: 10px;
}
.prev{
    left: 10px;
}

.next{
    right: 10px;
}

.dots{
    text-align: center;
    position: absolute;
    bottom: 15px;
    width: 100%;
}

.dot{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 10px;
    cursor: pointer;
}

.dot.active{
    background-color: aliceblue;
}

.preview {
    display: block;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.preview-content {
    margin: auto;
    display: block;
    max-width: 80%;
    max-height: 80%;
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}


</style>