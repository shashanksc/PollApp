<script>
   import PollStore from "../stores/PollStore.js";
    export let poll;
    import Card from "../shared/card.svelte";
    import Button from "../shared/Button.svelte";
    
    //reactive value
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100/totalVotes*poll.votesA );
    $: percentB = Math.floor(100/totalVotes*poll.votesB );

    const handleVote = (option, id) => {
        PollStore.update(currentPolls =>{
            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((poll)=>poll.id == id);
            if(option === 'a'){
                upvotedPoll.votesA++;
            }
            if(option === 'b'){
                upvotedPoll.votesB++;
            }
           return copiedPolls;
        });
        
    };

    // Deleting a poll
    const handleDelete = (id) =>{
        PollStore.update(currentPolls =>{
            return currentPolls.filter(poll => poll.id != id)
        })
    }
</script>
<Card>
<div class="poll">
    <h3>{poll.question}</h3>
    <p> Total votes: {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('a',poll.id)}>
        <div class="percent percent-a" style = "width : {percentA}%"></div>
        <span> {poll.answerA} ({poll.votesA})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('b',poll.id)}>
        <div class="percent percent-b" style = "width : {percentB}%"></div>
        <span> {poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
        <Button flat={true} on:click={()=> handleDelete(poll.id)}>Delete</Button>
    </div>
</div>
</Card>
<style>
    span{
        color: #ffffff;
        display: inline-block;
        padding:10px 20px;
    }
    h3{
        margin: 0 auto;
        color: #fff;
    }
    p{
        font-size: 14px;
        margin-top: 6px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer{
        background: rgba(20,20,30,0.25);
        cursor: pointer;
        margin: 10px auto;
        position: relative;
        border-radius: 6px;
    }
    .answer:hover{
        background: rgba(60,60,70,0.4);
    }
    
    .percent{
        height: 100%;
        position : absolute;
        box-sizing: border-box;

    }
    .percent-a{
        
        border-left: 4px solid #001a66;
        background: rgba(0,51,204,0.7);
    }
    .percent-b{
        border-left: 4px solid #0066cc;
        background: rgba(0,102,204,0.7);
    }
    .delete{
        margin-top:30px;
        text-align: center;
    }
</style>