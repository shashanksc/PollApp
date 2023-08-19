<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
export let items;
export let activeItem;

</script>
<div class="tabs">
    <ul>
        {#each items as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click = { () => dispatch('tabChange', item)}>
            <div class:active={item === activeItem}>{item}</div>
        </li>
        {/each}
    </ul>
</div>
<style>
    .tabs{
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        color: #b3d9ff;
        cursor: pointer;
    }
    .active{
        color: #0FA5E8;
        border-bottom: 2px solid #0FA5E8;
        padding-bottom: 8px;
    }
</style>