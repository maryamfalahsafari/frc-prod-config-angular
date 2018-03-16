import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[myUnless]'
})
export class MyUnlessDirective {
    constructor(private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef) {

    }

    @Input() set myUnless(value: string) {
        console.log('value', value);
        //console.log('TemplateRef', this._templateRef);
        //console.log('ViewContainerRef', this._viewContainerRef);

        this._viewContainerRef.clear();
        this._viewContainerRef.createEmbeddedView(this._templateRef);
        // for(var i=0; i < 1; i++) {
		// 	this._viewContainerRef.createEmbeddedView(this._templateRef);
		// }
        

    }

}
