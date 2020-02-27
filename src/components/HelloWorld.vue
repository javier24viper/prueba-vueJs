<template>
    <section>
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>col1</th>
                            <th>col2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="answer in answers" :key="answer.id">
                            <td data-label="Name">{{answer.right}}</td>
                            <td data-label="Name">{{answer.questionId}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            answers: [],
            answer: null
        };
    },
    created() {
        var self = this;
        firebase.auth().onAuthStateChanged(function(answer) {
            self.answer = answer;
        });
        this.answers = [];
        firebase
            .firestore()
            .collection("roles")
            .get()
            .then(snap => {
                snap.forEach(doc => {
                    var answer = doc.data();
                    answer.id = doc.id;
                    console.log(doc.data());
                    if (!answer.role.admin) this.answers.push(answer);
                });
            });
    },
};
</script>