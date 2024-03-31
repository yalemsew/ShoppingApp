import {SimpleChange} from "@angular/core";

export class Util {

  static log(changes: SimpleChange, componentName: string) {
    console.log("====================================");
    console.log(`${componentName} ngOnChanges`);
    console.log(JSON.stringify(changes?.previousValue));
    console.log("Changed TO");
    console.log(JSON.stringify(changes?.currentValue));
    console.log("====================================");

  }
  static logD(componentName: string) {
    console.log("====================================");
    console.log(`${componentName} ngOnDestroy`);
    console.log("====================================");

  }


}
