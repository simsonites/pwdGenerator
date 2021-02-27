import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent  {

  passwordLength = 0;
  includeLetters=false;
  includeSymbols = false;
  includeNumbers = false;
  password = ''

  checkPasswordLength(value){
   const parsedVal = parseInt(value);
   if (!isNaN(parsedVal)){
     this.passwordLength = parsedVal;
   }
 }

  useLetters(){
    this.includeLetters  = !this.includeLetters;
  }

  useNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  generatePassword() {
   const letters  = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = 1234567890;
    const symbols = '~!@#$%^&*()_+-/?';

   let validChar = '';
    if (this.includeLetters){
      validChar += letters;
    }

    if (this.includeNumbers){
      validChar += numbers;
    }
    if (this.includeSymbols){
      validChar += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random()* validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }
}
