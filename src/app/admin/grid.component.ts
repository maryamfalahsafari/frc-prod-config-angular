import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'grid.component.html',
    styleUrls: ['grid.component.css']

})
export class GridComponent {

    selectedTab: string ;
    FXTRFALLDAYShowing: boolean = true;
    DOTPALLDAYShowing: boolean = false;
    DOTALLDAYShowing: boolean = false;

    FXTRF2TIERShowing: boolean = false;
    DOTP2TIERShowing: boolean = false;
    DOT2TIERShowing: boolean = false;


    ngOnInit() {
        console.log('main');
        this.selectedTab = 'FXTRFALLDAY';
    }
    selectTab(tabName) {
        this.selectedTab = tabName;
        if (tabName == "FXTRFALLDAY") {
            this.FXTRFALLDAYShowing = true;
            this.DOTPALLDAYShowing = false;
            this.DOTALLDAYShowing = false;
            this.FXTRF2TIERShowing = false;
            this.DOTP2TIERShowing = false;
            this.DOT2TIERShowing = false;

        } else if (tabName == "DOTPALLDAY") {
            this.FXTRFALLDAYShowing = false;
            this.DOTPALLDAYShowing = true;
            this.DOTALLDAYShowing = false;
            this.FXTRF2TIERShowing = false;
            this.DOTP2TIERShowing = false;
            this.DOT2TIERShowing = false;

        } else if (tabName == "DOTALLDAY") {
            this.FXTRFALLDAYShowing = false;
            this.DOTPALLDAYShowing = false;
            this.DOTALLDAYShowing = true;
            this.FXTRF2TIERShowing = false;
            this.DOTP2TIERShowing = false;
            this.DOT2TIERShowing = false;

        } else if (tabName == "FXTRF2TIER") {
            this.FXTRFALLDAYShowing = false;
            this.DOTPALLDAYShowing = false;
            this.DOTALLDAYShowing = false;
            this.FXTRF2TIERShowing = true;
            this.DOTP2TIERShowing = false;
            this.DOT2TIERShowing = false;

        } else if (tabName == "DOTP2TIER") {
            this.FXTRFALLDAYShowing = false;
            this.DOTPALLDAYShowing = false;
            this.DOTALLDAYShowing = false;
            this.FXTRF2TIERShowing = false;
            this.DOTP2TIERShowing = true;
            this.DOT2TIERShowing = false;

        } else if (tabName == "DOT2TIER") {
            this.FXTRFALLDAYShowing = false;
            this.DOTPALLDAYShowing = false;
            this.DOTALLDAYShowing = false;
            this.FXTRF2TIERShowing = false;
            this.DOTP2TIERShowing = false;
            this.DOT2TIERShowing = true;

        }
    }

    // login(){
    //     let config = new AdalConfig('clientID', 'unittest.onmicrosoft.com', 'http://localhost');
    //     let context = Authentication.getContext(config);
    //     context.login();
    // }













    // onCellChange(event, row, column, tabName) {

    //     // console.log(event.target.innerHTML);
    //     let value = event.target.innerHTML.replace('<br>', '').replace(',', '');
    //     // event.target.onblure = function(){console.log('sdjhsjdhsjhdsjd');};
    //     if (tabName == "FXTRFALLDAY") {
    //         let index = this.FXTRFALLDAYList.findIndex(line => line == row);
    //         this.FXTRFALLDAYList[index][column] = value;
    //     } else if (tabName == "DOTPALLDAY") {
    //         let index = this.DOTPALLDAYList.findIndex(line => line == row);
    //         this.DOTPALLDAYList[index][column] = value;
    //     } else if (tabName == "FXTRF2TIER") {
    //         let index = this.FXTRF2TIERList.findIndex(line => line == row);
    //         this.FXTRF2TIERList[index][column] = value;
    //     } else if (tabName == "DOTP2TIER") {
    //         let index = this.DOTP2TIERList.findIndex(line => line == row);
    //         this.DOTP2TIERList[index][column] = value;
    //     }

    // }


    // tableData: TableData[] = [
    //     new TableData(1, 'Canada', 'Ottawa'),
    //     new TableData(2, 'USA', 'Washington DC'),
    //     new TableData(3, 'Australia', 'Canberra'),
    //     new TableData(4, 'UK', 'London')
    // ];

    // ngAfterViewInit() {
    //     console.log('Hi');
    //     //console.log(this.rd);
    //     // this.el.nativeElement.focus();
    //     // this.el.nativeElement.contentEditable = true;
    //     // this.el.nativeElement.innerHTML = 'sdasasas';
    //     // $(this.el.nativeElement).html('Hi Maryam');

    // }


    // do(event) {
    //     $(event).focus();
    //     $(event).prop("contenteditable", true);
    //     $(event).on({
    //         "keypress": function (e) {
    //             var char = e.which || e.keyCode;
    //             console.log(char);

    //             if (char == 13 || char == 9) {
    //                 console.log('tab');
    //                 $(event).prop("contenteditable", false);
    //                 $(event).nextAll("td").eq(0).prop("contenteditable", true);
    //                 $(event).nextAll("td").eq(0).focus();
    //             }

    //         },
    //         // "dblclick" : function() {
    //         //     $(event).not(this).prop("contenteditable", false);
    //         //   $(this).prop("contenteditable", true);
    //         // }
    //     });
    //     // event.onkeypress = function (key) {
    //     //     var char = key.which || key.keyCode;
    //     //     if (char == 13 || char == 9) {
    //     //         event.contentEditable = false;
    //     //         event.nextSibling.contentEditable = true;
    //     //         console.log(event.nextSibling);
    //     //         //event.nextSibling.focus();
    //     //         //event.blur();
    //     //     }
    //     // }
    //     // event.contentEditable = true;
    //     // event.onkeypress = function (key) {
    //     //     var char = key.which || key.keyCode;
    //     //     if (char==13 || char==9){
    //     //         event.contentEditable = false;
    //     //         event.nextSibling.contentEditable=true;
    //     //         console.log(event.nextSibling);
    //     //         //event.nextSibling.focus();
    //     //         //event.blur();
    //     //     }
    //     // }
    //     //event.innerHTML = 'HIIIIIII';
    //     //console.log(event);
    //    // console.log('HIIIIIII');
    //    // console.log($(event).nextAll());
    //    // $(event).nextAll("td").eq(0).html('Mahsa');
    //     // $(event).parent().nextAll("td").eq(0).innerHTML = 'HIIIIIII';
    //    // $(event).html('HIIIIIII');

    // }

}