	

ubsApp.decisionConfig = {
	
	"decision1" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ1}}",
				"questionId":1,
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q1", 
						"optionValue": "{{decisionQ1O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-1000,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q1", 
						"optionValue": "{{decisionQ1O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-2500,
							"reputationPoints":5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision2" : {

		"category":"Decision",
		"repeatforuser":true,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ2}}",
				"questionId":2,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q2", 
						"optionValue": "{{yes}}",
						"id":1,
						"insurance":true,
						"page":"decisionInsurance",
						"credit":{
							"inventory":0,
							"bankBalance":0,               //bankBalance decreases by premium
							"reputationPoints":30,
							"cash":0,
						},
					},
					{
						"optionName":"q2", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision3" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ3}}",
				"questionId":3,
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision4" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ4}}",
				"questionId":4,
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-23500,
							"reputationPoints":20,
							"cash":0,
						},
					},
					{
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":-5000,
							"reputationPoints":-20,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},


	"decision5" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ5}}",
				"questionId":5,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q5", 
						"optionValue": "{{decisionQ5O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-100,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q5", 
						"optionValue": "{{decisionQ5O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision6" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ6}}",
				"questionId":6,
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q6", 
						"optionValue": "{{decisionQ6O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-1200,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q6", 
						"optionValue": "{{decisionQ6O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-500,
							"reputationPoints":-5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision7" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ7}}",
				"questionId":7,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q7", 
						"optionValue": "{{decisionQ7O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-5000,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q7", 
						"optionValue": "{{decisionQ7O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision8" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ8}}",
				"questionId":8,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q8", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":500,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q8", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision9" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ9}}",
				"questionId":9,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q9", 
						"optionValue": "{{decisionQ9O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q9", 
						"optionValue": "{{decisionQ9O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":7000,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision10" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ10}}",
				"questionId":10,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q10", 
						"optionValue": "{{decisionQ10O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q10", 
						"optionValue": "{{decisionQ10O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":500,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision11" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ11}}",
				"questionId":11,
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q11", 
						"optionValue": "{{decisionQ11O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-100,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q6", 
						"optionValue": "{{decisionQ11O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-500,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision12" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ12}}",
				"questionId":12,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q12", 
						"optionValue": "{{decisionQ12O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-750,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q12", 
						"optionValue": "{{decisionQ12O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-2250,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision13" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ13}}",
				"questionId":13,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q13", 
						"optionValue": "{{decisionQ13O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-2100,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q13", 
						"optionValue": "{{decisionQ13O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-700,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision14" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ14}}",
				"questionId":14,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q14", 
						"optionValue": "{{decisionQ14O1}}",
						"pamphlet":true,					//only if pamphlet is true we can do something to change value from
						"id":1,
						"credit":{
							"inventory":0,									
							"bankBalance":-1000,								//pamphlets profit from 500-3000											
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q14", 
						"optionValue": "{{decisionQ14O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":0,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision15" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ15}}",
				"questionId":15,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q15", 
						"optionValue": "{{decisionQ15O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":2000,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q15", 
						"optionValue": "{{decisionQ15O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision16" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ16}}",
				"questionId":16,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q16", 
						"optionValue": "{{decisionQ16O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":2500,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q16", 
						"optionValue": "{{decisionQ16O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision17" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ17}}",
				"questionId":17,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q17", 
						"optionValue": "{{decisionQ17O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":500,
							"reputationPoints":-10,
							"cash":0,
						}
					},
					{
						"optionName":"q17", 
						"optionValue": "{{decisionQ17O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						}
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision18" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ18}}",
				"questionId":18,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q18", 
						"optionValue": "{{decisionQ18O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-15,
							"cash":0,
						},
					},
					{
						"optionName":"q18", 
						"optionValue": "{{decisionQ18O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q18", 
						"optionValue": "{{decisionQ18O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-20,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision19" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ19}}",
				"questionId":19,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q19", 
						"optionValue": "{{decisionQ19O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q19", 
						"optionValue": "{{decisionQ19O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-250,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q19", 
						"optionValue": "{{decisionQ19O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision20" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ20}}",
				"questionId":20,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q20", 
						"optionValue": "{{decisionQ20O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q20", 
						"optionValue": "{{decisionQ20O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-1000,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q20", 
						"optionValue": "{{decisionQ20O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision21" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ21}}",
				"questionId":21,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q21", 
						"optionValue": "{{decisionQ21O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-3000,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q21", 
						"optionValue": "{{decisionQ21O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision22" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ22}}",
				"questionId":22,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q22", 
						"optionValue": "{{decisionQ22O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q22", 
						"optionValue": "{{decisionQ22O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-500,
							"reputationPoints":10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision23" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ23}}",
				"questionId":23,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q23", 
						"optionValue": "{{decisionQ23O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q23", 
						"optionValue": "{{decisionQ23O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision24" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ24}}",
				"questionId":24,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q24", 
						"optionValue": "{{decisionQ24O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":1000,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q24", 
						"optionValue": "{{decisionQ24O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q24", 
						"optionValue": "{{decisionQ24O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision25" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ25}}",
				"questionId":25,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q25", 
						"optionValue": "{{decisionQ25O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q25", 
						"optionValue": "{{decisionQ25O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q25", 
						"optionValue": "{{decisionQ25O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision26" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ26}}",
				"questionId":26,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q26", 
						"optionValue": "{{decisionQ26O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q26", 
						"optionValue": "{{decisionQ26O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-250,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q26", 
						"optionValue": "{{decisionQ26O3}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision27" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ27}}",
				"questionId":27,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q27", 
						"optionValue": "{{decisionQ27O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-1000,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q27", 
						"optionValue": "{{decisionQ27O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},
	
	"decision28" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ28}}",
				"questionId":28,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q28", 
						"optionValue": "{{decisionQ28O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-3500,
							"reputationPoints":20,
							"cash":0,
						},
					},
					{
						"optionName":"q28", 
						"optionValue": "{{decisionQ28O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":1500,
							"reputationPoints":-20,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},
	
	"decision29" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ29}}",
				"questionId":29,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q29", 
						"optionValue": "{{decisionQ29O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":1000,
							"reputationPoints":-10,
							"cash":0,
						},
					},
					{
						"optionName":"q29", 
						"optionValue": "{{decisionQ29O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision30" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ30}}",
				"questionId":30,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q30",
						"randomProfit":true,
						"optionValue": "{{decisionQ30O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-5000,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q30", 
						"optionValue": "{{decisionQ30O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":0,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision31" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ31}}",
				"questionId":31,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q31", 
						"optionValue": "{{decisionQ31O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":20,
							"cash":0,
						},
					},
					{
						"optionName":"q31", 
						"optionValue": "{{decisionQ31O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q31", 
						"optionValue": "{{decisionQ31O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},

	"decision32" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ32}}",
				"questionId":32,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q32", 
						"optionValue": "{{decisionQ32O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q32", 
						"optionValue": "{{decisionQ32O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":15,
							"cash":0,
						},
					},
					{
						"optionName":"q32", 
						"optionValue": "{{decisionQ32O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},


	"decision33" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ33}}",
				"questionId":33,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q33", 
						"optionValue": "{{decisionQ33O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q33", 
						"optionValue": "{{decisionQ33O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q33", 
						"optionValue": "{{decisionQ33O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},


	"decision34" : {
		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{decisionBankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ34}}",
				"questionId":34,
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q34", 
						"optionValue": "{{decisionQ34O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q34", 
						"optionValue": "{{decisionQ34O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					}
					
				],
				"optionPageMap": {},
				
			}],
	},
	}