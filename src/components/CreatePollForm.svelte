<script>
    import PollStore from "../stores/PollStore.js";
    import { createEventDispatcher } from "svelte";
    let dispatch  = createEventDispatcher();
    import Button from "../shared/Button.svelte";
    let fields = {question:'',answerA:'',answerB:'',};
    let errors ={question : "", answerA : "", answerB : "",};
    let valid = false;

    const submitHandler = () =>{
        valid = true;
        // validate question
        if (fields.question.trim().length<5){
            valid = false;
            errors.question = 'Question must be at least 5 characters';
        } else {
            errors.question ='';
        }
        // validate answer a
        if (fields.answerA.trim().length<1){
            valid = false;
            errors.answerA = 'Answer A must not be empty';
        } else {
            errors.answerA ='';
        }
        // validate answer b
        if (fields.answerB.trim().length<1){
            valid = false;
            errors.answerB = 'Answer B must not be empty';
        } else {
            errors.answerB ='';
        }
        //add new poll
        if (valid){
            let poll ={...fields, votesA:0, votesB:0, id: Math.random()};
            PollStore.update(currentPolls =>{
                return [poll, ...currentPolls];
            })
            dispatch('add');
        }
    }
</script>
<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="question" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="question" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>

</form>

<style>
    form{
        font-family: Arial, Helvetica, sans-serif;
        width: 400px;
        margin: 0 auto;
        text-align: center;
        color: #e6f5ff;
    }
    .form-field{
        margin:18px auto;
    }
    input{
        width:100%;
        height:30px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #ccc;
        margin:5px auto;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-size: 12px;
        color :#d91b42;
    }

</style>