import { Component, OnInit } from "@angular/core";

import { ContactPickerValue } from "../../../../src";

@Component({
  selector: "app-demo-remote",
  templateUrl: "./demo-remote.page.html",
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DemoRemotePage {
  // person in first field
  picker1: ContactPickerValue;

  // person in first field
  picker2: ContactPickerValue;
}
