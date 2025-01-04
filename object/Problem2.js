
const sentenceBuilder = {
    subject: "I",
    verb: "am",
    object : 'coding',
    buildSentence :function() {
        return `${this.subject} ${this.verb} ${this.object}`;
    },
    updateProperties : function(key, value) {
        if(key === 'subject') {
            this.subject = value;
        }else if(key === 'verb') {
            this.verb = value; 
        }else if(key === 'object') {
            this.object = value;
        }else {
            return 'Invalid key';
        }
        return `${this.subject} ${this.verb} ${this.object}`;
    }
}

console.log(sentenceBuilder.buildSentence());
console.log(sentenceBuilder.updateProperties('He', 'is', 'playing'));
console.log(sentenceBuilder.updateProperties("subject" , "The Cat" ));