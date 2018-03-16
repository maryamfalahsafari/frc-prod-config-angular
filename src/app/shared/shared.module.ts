import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';



import { MyUnlessDirective } from './myUnless.directive';
import { MonthPickerComponent } from './monthPicker.component';
import { SizerComponent } from './sizer.component';
import { SwitchComponent } from './switch.component';

@NgModule({
    declarations: [
        MyUnlessDirective,
        MonthPickerComponent,
        SizerComponent,
        SwitchComponent],
    imports: [
        CommonModule,
        FormsModule],
    exports: [
        MyUnlessDirective,
        MonthPickerComponent,
        SizerComponent,
        SwitchComponent]
})
export class SharedModule {

}