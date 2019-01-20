
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i])
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct Answer');
        } else {
            console.log('Please try again!!')
        }
    }

    var q1 = new Question('Is JS the coolest programming language in the world?', ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of the teacher?', ['Sanchit', 'John', 'Jonas'], 2);

    var questions = [q1, q2];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
