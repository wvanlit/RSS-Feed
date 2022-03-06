<script lang="ts">
  let dots = 1

  setInterval(() => {
    dots = (dots % 3) + 1
  }, 1000)
</script>

<div class="wrapper">
  <div class="lds-ripple">
    <div />
    <div />
  </div>
  <span>Loading {'.'.repeat(dots)}</span>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper span {
    display: inline-block;
    width: 80px;
    text-align: left;
  }

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #aaa;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
</style>
