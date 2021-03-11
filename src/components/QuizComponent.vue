<template>
    <div class="q-quiz">
        <div @click="closeView" class="q-action-label">
            <div class="q-action"><font-awesome-icon :icon="['fas', 'times']" class="q-icon" />Close</div>
        </div>
        <div class="q-quiz-label">
            <div class="q-title-label">
                <h1>Take a quiz</h1>
            </div>
            <!-- quiz progress line -->
            <div class="q-progress" :style="{'width': progress + '%'}"></div>
            <!-- quiz question section -->
            <div class="q-quiz-main" v-for="(element, index) in questions.slice(a,b)" :key="index" v-show="quiz">
                <div class="q-question">
                    <h2>Question {{b}} / {{ questions.length }} </h2>
                    <h2> {{ element.question }} </h2>
                </div>
                <!-- question suggestions -->
                <div class="q-suggestions">
                    <ul>
                        <li v-for="(item, index) in element.suggestions" :key="index" :class="select ? check(item) : ''" 
                        @click="selectResponse(item)">
                        {{ item.suggestion }}
                        </li>                        
                    </ul>
                </div>
            </div>
            <!-- quiz score info and restart button. This appears at the end.-->
            <div class="q-score" v-if="score_show">
                <h2>Here is your score</h2>
                <h2> {{ score }} / {{ questions.length}}</h2>
                <div @click="restartQuiz">
                    <button class="q-buttonRestart"><font-awesome-icon :icon="['fas', 'sync-alt']" class="q-icon" />restart</button>
                </div>
                <div @click="closeView">
                    <button><font-awesome-icon :icon="['fas', 'times']" class="q-icon" />Close</button>
                </div>
            </div>
            <!-- quiz footer area include skip and next buttons -->
            <div class="q-footer">
                <div class="q-button" v-if="progress < 100">
                    <button @click="skipQuestion" :style="!next ? 'background-color: #C0609C' : ''">Skip</button>
                    <button @click="nextQuestion" class="q-button-next">next</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizComponent',

    data() {
        return {
            questions: [
                {
                  question: 'Which word becomes HTML',
                    suggestions: [
                        {suggestion: 'High Tech Maximum Level'},
                        {suggestion: 'Hypertext Markup Language',correct:true},
                        {suggestion: 'Hypertype Mark Language'},
                    ]
                },
                {
                  question: 'Which word becomes AR?',
                    suggestions: [
                        {suggestion: 'Artificial Robot'},
                        {suggestion: 'Automation Reality'},
                        {suggestion: 'Argumented Reality',correct:true},
                    ]
                },
                {
                  question: 'What is Python',
                    suggestions: [
                        {suggestion: 'Men´s shaving lotion'},
                        {suggestion: 'Programming language',correct:true},
                        {suggestion: 'Spare cable'},
                    ]
                },
                {
                  question: 'Which word becomes SEO?',
                    suggestions: [
                        {suggestion: 'Search Engine Optimization',correct:true},
                        {suggestion: 'Search Explorer Object'},
                        {suggestion: 'Search Email Output'},
                    ]
                },
            ],
            a: 0,
            b: 1,
            select: false,
            score: 0,
            quiz: true,
            score_show: false,
            next: false,
            progress: 0
        }
    },
    methods: {
        selectResponse(e) {
            this.select = true;
            this.next = true;
            if (e.correct) {
                this.score++;
            }                
        },
        check(status) {
            if (status.correct) {
                return 'correct'            
            } 
            else {
            return 'incorrect'
            }
        },
        nextQuestion() {
            if (!this.next) {
                return;
            }

            this.progress = this.progress + (100/this.questions.length);

            if(this.questions.length - 1 == this.a) {
                this.score_show = true;
                this.quiz = false;
            }
            else {
                this.a++;
                this.b++;
                this.select = false;
                this.next = false;
            }            
        },
        skipQuestion() {
            if (this.naxt) {
                return;
            }

            this.progress = this.progress + (100/this.questions.length);

            if (this.questions.length - 1 == this.a) {
                this.score_show = true;
                this.quiz = false;
            } 
            else {
                this.a++;
                this.b++;
            }
        },
        //reset data
        restartQuiz() {

            Object.assign(this.$data, this.$options.data());
        },
        closeView() {
            this.$emit("closewindow")
        },
    }
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style scoped>
    .q-quiz {
        width: 100vw;        
        height: 100vh;
        padding: 40px 20px 20px 20px;
        background: rgba(0, 0, 0, 0.72);
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
    }

    .q-action-label {
        padding-right: 100px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .q-action {
        color: white;
        cursor: pointer;
    }

    .q-quiz-label {
        width: 600px;   
        height: 550px;            
        padding: 20px;
        margin-top: 40px;;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        border-color: 1px blue;
        background-color: white;
        box-shadow: 0 10px 20px rgba(0, 0, 0.20), 0 6px 6px rgba(0, 0, 0, 0.22);        
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }

    .q-progress {
        display: flex;
        width: 100%;
        height: 6px;
        background-color:rgb(106,128,202);
        transition: 0.5s;
    }

    .q-title-label {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    h1 {
        margin: 20px;
    }

    h2 {
        margin: 10px;
    }

    .q-quiz-main {
        width: 100%;        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;        
    }

    .q-question {        
        display: flex;
        flex-direction: column;
        align-items: center;        
    }    

    .q-suggestion {
        width: 100%;        
        display: flex;
        flex-direction: column; 
        justify-content: center;       
    }

    ul {
        width: 100%;
        padding: 0;       
    }

    ul li {
        list-style: none;
        line-height: 4;
        border: 1px solid lightgrey;
        margin-bottom: 20px;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        transition: 0.3s;
    }

    li:hover {
        background-color: rgb(230, 235, 241);
    }

    li.correct{
        border: 1px;
        background-color: green;
        font-weight: 300px;
        color: white;
    }

    li.incorrect {
        border: 1px;
        background-color: #C0609C;
        font-weight: 300px;
        color: white
    }

    .q-score {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }    

    .q-buttonRestart {
        background-color:#323266; ;
        color: white;
        width: 120px;
        height: 40px;
        margin: 10px;
        border: 0;        
        cursor: pointer;
        font-size: 1rem;        
    }

    .q-icon {
        margin-right: 10px;
    }

    .q-button {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
    }    

    button {
        background-color: rgb(230, 235, 241);
        width: 120px;
        height: 40px;
        margin: 10px;
        border: 1px;        
        cursor: pointer;
        font-size: 1rem;
    }

    .q-button-next {
        background-color: green;
        color: white;
        border-color: transparent;
    }

    @media screen and (max-width: 900px) {
        .q-quiz {
            width: 60%;
        }
    }

    @media screen and (max-width: 720px) {
        .q-quiz {
            width: 80%;
        }
    }
    
    </style>