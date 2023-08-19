<script>
    export let type ="primary";
    export let flat =false;
    export let inverse = false;
</script>
<button class ={type} class:flat={flat} class:inverse={inverse} on:click> 
    <slot></slot>
</button>
<style>
    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding : 8px 12px;
        font-weight: bold;
        box-shadow: 0px 4px 4px rgba(60,70,100,0.5);
    }
    .primary{
        background-color: #1F283B;
        color: white;

    }
    .secondary{
        background-color: #0FA5E8;
        color: white;
    }
    .flat{
        box-shadow: none;
    }
    .primary.inverse{
        color:#1F283B;
        background: white;
        border: 2px solid #1F283B;
    }
    .secondary.inverse{
        color: #0FA5E8;
        background: white;
        border: 2px solid #0FA5E8;
    }
</style>