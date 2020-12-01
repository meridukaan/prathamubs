class User{
   
    /*constructor()
    {

    }*/

    setRoomCode(roomCode){
        this.roomCode = roomCode;
    }

    getRoomCode(){
        return this.roomCode;
    }

    canUserTakeQuiz() {
     if(this.quizTakenInCurrentWeek < 2) {
        return true;
     }

     return false;
    }

    isCashTransferred() {
        return this.cashTransferred;
    }

    setCashTransferred(flag) {
        this.cashTransferred = flag;
    }

    incrementQuizCount() {
        this.quizTakenInCurrentWeek++;
    }
    setplayerName(name){
        this.name=name;
    }

    setplayerAge(age){
        this.age=age;
    }

    setplayerGender(gender){
        this.gender=gender;
    }

    setplayerUniqueIdentifier(uid){
        this.uid=uid;
    }

    setplayerStudentId(id) {
        this.playerStudentId = id;
    }

    getplayerStudentId() {
            return this.playerStudentId;
        }

    setplayerScore(score){ ///this is the cash
        this.score=Math.round(score);
    }
    setTransferReminderOpened(flag){
        this.reminderForThisWeekShown=flag;
    }
    getTransferReminderOpened(){
        return this.reminderForThisWeekShown;
    }
    setplayerColor(color){
        this.color=color.toLowerCase();
    }
    setCorrectAnswered(number){
        this.correctAnswered = number;
    }
    setplayerCurrentPos(currentPos){
        this.currentPos=currentPos;
    }
    setplayerId(playerId){
        this.playerId=playerId;
    }
    setSalesScenario(salesScenario)
    {
        this.salesScenarioArray = [];
        for(var i=0;i<salesScenario.length;i++)
        {
            this.salesScenarioArray[i]=salesScenario[i];
        }
    }
    setIsComputer(isComputer)
    {
        this.isComputer=isComputer;
    }
    setDifficultyLevel(difficultyLevel)
    {
        this.difficultyLevel=difficultyLevel;
    }
    setBankBalance(bankBalance){
        this.bankBalance=Math.round(bankBalance);
    }
    getDifficultyLevel()
    {
        return this.difficultyLevel;
    }
    getIsComputer()
    {
        return this.isComputer;
    }

    getBankBalance(){
        return this.bankBalance;
    }

    setCredit(credit){
        this.credit=Math.round(credit);
    }
    
    setCreditLimit(creditLimit){
        this.creditLimit=Math.round(creditLimit);
    }

    getCredit(){
        return this.credit; 
    }
    getCreditLimit(){
        return this.creditLimit;
    }
    setInventoryScore(inventoryScore)
    {
        if(inventoryScore < 0) {
            inventoryScore = 0;
        }
        this.inventoryScore=Math.round(inventoryScore);
    }

    getInventoryScore()
    {
        return this.inventoryScore;
    }

    /*updateInventoryScore(amount){
        this.inventoryScore=this.inventoryScore+amount;
    }*/

    getInsurance()
    {
      return this.insurance
    }

    setInsurance(insurance){
      this.insurance=insurance;
    }

    setPremium(premium){
      this.premium = premium;
    }

    getPremium(){
      return this.premium;
    }

    setSumAssured(sum){
      this.sumAssured = Math.round(sum);
    }

    getSumAssured(){
      return this.sumAssured;
    }


    setScenarioArray(scenariosArray)    
    {
        this.scenariosArray=[];
        for(var key in scenariosArray)
        {
            if(this.scenariosArray[key]==null)
            {
                this.scenariosArray[key]=[];
            }
            for(var iterator=0;iterator<scenariosArray[key].length;iterator++)
            {
                this.scenariosArray[key][iterator]=scenariosArray[key][iterator];
            }
        }
    }

    setScenarioArrayByCategory(scenariosArray, category)
        {
            if(this.scenariosArray[category]==null)
            {
                this.scenariosArray[key]=[];
            }
            for(var iterator=0;iterator<scenariosArray[category].length;iterator++)
            {
                this.scenariosArray[category][iterator]=scenariosArray[category][iterator];
            }
        }

    setReputationPts(reputationPts){
        this.reputationPts=reputationPts;
    }
    getReputationPts(){
        return this.reputationPts;
    }
    setWeeks(weeks){
        if(this.deadline>0){
            this.deadline--;
        }
    	this.noOfWeeks = weeks;
    	this.quizTakenInCurrentWeek = 0;
    }

    copyCurrentSummaryToLastWeek() {
        this.setLastWeekSummary(this.getplayerScore(), this.getBankBalance(), this.getReputationPts(), this.getCredit(), this.getAdvantageCardNumber(), this.getInventoryScore());

    }

    setOpenWeekSummary(openWeekSummary) {
        this.openWeekSummary = openWeekSummary;
    }

    isOpenWeekSummary() {
        return this.openWeekSummary;
    }
    setAdvantageCardNumber(advantageCardNumber){
        if(this.advantageCardNumber==null)
        {
            this.advantageCardNumber=advantageCardNumber;
        }
        else{
            this.advantageCardNumber+=advantageCardNumber;
        }
    }
    getAdvantageCardNumber(){
        return this.advantageCardNumber;
    }
    setCorrectProbability(level){
        if(level.toLowerCase()=="easy"){
            this.correctProbability = (Math.random()*2)*0.1+0.15;
            console.log(this.correctProbability);
        }else if(level.toLowerCase() == "medium"){
            this.correctProbability = (Math.random()*2)*0.1+0.5;
            console.log(this.correctProbability);
        }else if(level.toLowerCase() == "hard"){
            this.correctProbability = (Math.random()*2)*0.1+0.8;
            console.log(this.correctProbability);
        }
    }
    getCorrectProbability(){
        console.log(this.correctProbability);
        return this.correctProbability;
    }
    getplayerName(){
        return (this.name).toUpperCase();
    }

    isPlayerEligibleToPlay() {
        if(this.getWeeks() > ubsApp.maxNumOfWeeks) {
            return false;
        }
        return true;
    }
    getplayerScore(){   ///this is the cash 
        return this.score;
    }
    getplayerColor(){
        return this.color;
    }
    getplayerCurrentPos(){
        return this.currentPos;
    }
    getplayerId(){
        return this.playerId;
    }
    
    getplayerAge(){
        return this.age;
    }

    getplayerGender(){
        return this.gender;
    }

    getplayerUniqueIdentifier(){
        return this.uid;
    }


    // updatequestions(questionId){
    //     this.questionsDone.push(questionId);
    //}
    getCorrectAnswered(){
        return this.correctAnswered;
    }

    setPayOffDeadline(deadline){
        if(this.deadline==-1||!this.deadline)
            this.deadline=deadline;
    }
    getPayOffDeadline(){
        return this.deadline;
    }

    getWeeks(){
    	return this.noOfWeeks;
    }

    setWildCard(numberOfWildCard){
        this.numberOfWildCard=numberOfWildCard;
    }
    
    getWildCard(){
        return this.numberOfWildCard;
    }

    setPaymentReminderOpen(open) {
        this.paymentReminderOpen = open;
    }

    getPaymentReminderOpen() {
        return this.paymentReminderOpen;
    }
    setLastWeekSummary(cash, bankBalance, reputationPts, credit, advantageCard, inventoryScore) {
        this.lastWeekScore = cash;
        this.lastWeekBankBalance = bankBalance;
        this.lastWeekReputationPts = reputationPts;
        this.lastWeekCredit = credit;
        this.lastWeekAdvantageCard = advantageCard;
        this.lastWeekInventoryScore = inventoryScore;
    }

    getLastWeekPlayerScore() {
        return this.lastWeekScore;
    }

    getLastWeekBankBalance() {
        return this.lastWeekBankBalance;
     }

    getLastWeekReputationPts() {
        return this.lastWeekReputationPts;
     }

    getLastWeekCredit() {
        return this.lastWeekCredit;
     }

    getLastWeekAdvantageCardNumber() {
        return this.lastWeekAdvantageCard;
    }

    getLastWeekInventoryScore() {
        return this.lastWeekInventoryScore;
    }
getScenario(category,playerChance)
    {
        
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;
        if(this.scenariosArray[category].length==0)
               {
                   this.setScenarioArrayByCategory(scenariosArray, category);
               }
               // var scenariosApplicable=[];
               // for(var i=0;i<this.scenariosArray[category].length;i++){
               //     if(ubsApp.pages[this.scenariosArray[category][i].getName()].minimumInventoryScoreRequired<=userArray[playerChance].getInventoryScore()){
               //         scenariosApplicable.push(this.scenariosArray[category][i]);
               //     }
               // }
               // if(scenariosApplicable.length==0){
               //     this.setScenarioArray(scenariosArray);
               //     for(var i=0;i<this.scenariosArray[category].length;i++){
               //         if(ubsApp.pages[this.scenariosArray[category][i].getName()].minimumInventoryScoreRequired<=userArray[playerChance].getInventoryScore()){
               //             scenariosApplicable.push(this.scenariosArray[category][i]);
               //         }
               //     }
               // }
               
               number=(Math.floor(Math.random() * 300) + 1)%(this.scenariosArray[category].length);
               object=this.scenariosArray[category][number];
       
               /*while(ubsApp.pages[object.getName()].minimumInventoryScoreRequired>=userArray[playerChance].getInventoryScore())
               {
                   number=(Math.floor(Math.random() * 100) + 1)%(this.scenariosArray[category].length);
                   object=this.scenariosArray[category][number];
               }*/
               if(object.getRepeatforUser()==false)
               {
                   removeFromUser=true;
               }
               if(object.getRepeatforAllUsers()==false)
               {
                   removeFromAll=true;
               }
       
               if(object.getIfCalculatorRequired())
               {
                   calculatorReq=true;
               }
               if(removeFromUser)
               {
                   this.scenariosArray[category].splice(number,1);
               }
               if(removeFromAll)
               {
                   for(var i=0;i<userArray.length;i++)
                   {
                       if(playerChance!=i)
                       userArray[i].scenariosArray[category].splice(number,1);
                   }
               }
               return object; 
           }
}