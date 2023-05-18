import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Assignment 2C';
displayVal='';
age='';
city='';
getValues(val:any)
{
console.log(val);
this.displayVal=val.user;
this.age=val.age;
this.city=val.city;
}
}
