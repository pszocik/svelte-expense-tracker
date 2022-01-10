<button on:click>
  <slot />
</button>

<style>
  button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 5px;
    border-radius: 5px;
    border: none;
    transition: all 0.4s ease 0s;
    margin-left: 10px;
  }
  button:hover {
    background: #434343;
    letter-spacing: 2px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
</style>
