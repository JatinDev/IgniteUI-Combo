import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  countriesStaticData = [
    { 'countryId': '1', 'countryName': 'India' },
    { 'countryId': '2', 'countryName': 'China' },
    { 'countryId': '3', 'countryName': 'United States' },
    { 'countryId': '4', 'countryName': 'Australia' },
    { 'countryId': '5', 'countryName': 'United Kingdom' },
    { 'countryId': '6', 'countryName': 'Egypt' },
    { 'countryId': '7', 'countryName': 'Pakistan' }
  ];

  statesStaticData = [
    { 'countryName': 'India', 'countryId': '1', 'stateId': '1', 'stateName': 'Delhi' },
    { 'countryName': 'India', 'countryId': '1', 'stateId': '2', 'stateName': 'Mumbai' },
    { 'countryName': 'India', 'countryId': '1', 'stateId': '3', 'stateName': 'Banglore' },
    { 'countryName': 'China', 'countryId': '2', 'stateId': '4', 'stateName': 'Hunam' },
    { 'countryName': 'China', 'countryId': '2', 'stateId': '5', 'stateName': 'Yunnan' },
    { 'countryName': 'China', 'countryId': '2', 'stateId': '6', 'stateName': 'Jiangsu' },
    { 'countryName': 'United States', 'countryId': '3', 'stateId': '7', 'stateName': 'Texas' },
    { 'countryName': 'United States', 'countryId': '3', 'stateId': '8', 'stateName': 'New York' },
    { 'countryName': 'United States', 'countryId': '3', 'stateId': '9', 'stateName': 'Connecticut' },
    { 'countryName': 'United Kingdom', 'countryId': '4', 'stateId': '10', 'stateName': 'Queensland' },
    { 'countryName': 'United Kingdom', 'countryId': '4', 'stateId': '11', 'stateName': 'Victoria' },
    { 'countryName': 'United Kingdom', 'countryId': '4', 'stateId': '12', 'stateName': 'New South Wales' },
    { 'countryName': 'United Kingdom', 'countryId': '5', 'stateId': '13', 'stateName': 'England' },
    { 'countryName': 'United Kingdom', 'countryId': '5', 'stateId': '14', 'stateName': 'Northern Ireland' },
    { 'countryName': 'United Kingdom', 'countryId': '5', 'stateId': '15', 'stateName': 'Scotland and Wales' },
    { 'countryName': 'Egypt', 'countryId': '6', 'stateId': '16', 'stateName': 'Aswan' },
    { 'countryName': 'Egypt', 'countryId': '6', 'stateId': '17', 'stateName': 'Cairo' },
    { 'countryName': 'Egypt', 'countryId': '6', 'stateId': '18', 'stateName': 'Hurghada' },
  ];

  filterdStates: any[];

  constructor() { }

  ngOnInit() {
    this.filterdStates = this.statesStaticData;
  }

  CountryComboChange(obj: any): void {
    this.filterdStates = [];
    if (obj.length == 0) {
    this.filterdStates = this.statesStaticData;
      return;
    }
    obj.forEach(element => {
      let tempobj = this.statesStaticData.filter((obj) => obj.countryId === element.countryId);
      tempobj.forEach(e => {
        this.filterdStates.push(e);
      });
      this.filterdStates.push();
    });
    console.log(this.filterdStates);
  }
}
