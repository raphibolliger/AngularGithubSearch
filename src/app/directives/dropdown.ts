import { Directive, ElementRef, AfterViewInit } from "@angular/core";
declare var $: any;

@Directive({
    selector: "[sm-dropdown]"
})

export class SemanticDropdownDirective implements AfterViewInit {

    constructor(private dropdown: ElementRef) { }

    ngAfterViewInit(): void {
        console.warn("Instantiate dropdown...")
        $(this.dropdown.nativeElement).dropdown();
    }
}