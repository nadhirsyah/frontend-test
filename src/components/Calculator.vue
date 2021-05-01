<template>
    <div class="container">
        <Header
            title="Calculator"
        />
        <button @click="onClick()" class="btn">
            Show Calculator
        </button>
        <div v-bind:class="{ hide: isHide }" class="margin-top">
        <form>
            <div class="form-row"> 
                <div class="col">
                    <input type="number" class="form-control text-align-center" placeholder="Number 1" v-model.number="num1">
                </div>
                <div class="col">
                    <select class="form-control text-align-center" v-model="operand">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                     </select>
                </div>
                 <div class="col">
                    <input type="number" class="form-control text-align-center" placeholder="Number 2" v-model.number="num2">
                </div>
                 <div class="col">
                    <h2 class="text-align-center">= {{result}} </h2>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>
<script>
import Header from './Header'
  export default {
      components: {
        Header,
      },

      data() {
        return {
            isHide: true,
          num1: 0,
          num2: 0,
          operand:"",
          showCalculator: false
        };
      },
       methods: {
        onClick() {
            this.isHide = !this.isHide
        },
        },
      computed: {
          result(){
              switch(this.operand){
                  case "+":
                      return this.num1 + this.num2
                  case "-":
                      return this.num1 - this.num2
                  case "*":
                      return this.num1 * this.num2
                  case "/":
                      return this.num1 / this.num2
              }
              return this.num1
          }
      }
    }
</script>
<style scoped>
.hide {
    visibility: hidden !important;
    
}
.margin-top{
    margin-top: 30px;
}
.btn {
  display: inline-block;
  background: blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

}
.text-align-center{
    text-align: center;
}
</style>