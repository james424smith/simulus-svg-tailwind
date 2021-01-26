import { Controller } from "stimulus"

export default class extends Controller {
	static  values = { 
		printer_sel: Object
	}
	static targets = [  "bardraw",
	"production", 
	"distribution",
	"use",
	"end_of_life",
	"production_svg", 
	"distribution_svg",
	"use_svg",
	"end_of_life_svg" 
	]
	showbars() {
		let printerSel = null;
		this.printer_selValue.impacts.climate_change;
		
		const element = this.bardrawTarget;

		if(element.value == "climate_change") {
			printerSel = this.printer_selValue.impacts.climate_change;
		}else if(element.value == "energy_use") {
			printerSel = this.printer_selValue.impacts.energy_use;
		}
		const scale = 5;
		const production = this.productionTarget;
		const distribution = this.distributionTarget;
		const use = this.useTarget;
		const end_of_life = this.end_of_lifeTarget;

		const production_svg = this.production_svgTarget;
		const distribution_svg = this.distribution_svgTarget;
		const use_svg = this.use_svgTarget;
		const end_of_life_svg = this.end_of_life_svgTarget;

		production.height.baseVal.newValueSpecifiedUnits(1, printerSel.production*scale);
		production_svg.height.baseVal.newValueSpecifiedUnits(1, printerSel.production*scale);

		distribution.height.baseVal.newValueSpecifiedUnits(1, printerSel.distribution*scale);
		distribution_svg.height.baseVal.newValueSpecifiedUnits(1, printerSel.distribution*scale);

		use.height.baseVal.newValueSpecifiedUnits(1, printerSel.use*scale);
		use_svg.height.baseVal.newValueSpecifiedUnits(1, printerSel.use*scale);

		end_of_life.height.baseVal.newValueSpecifiedUnits(1, printerSel.end_of_life*scale);
		end_of_life_svg.height.baseVal.newValueSpecifiedUnits(1, printerSel.end_of_life*scale);
	}
	connect() {
		console.log("Stimulus works well");
		this.printer_selValue = {
			name: "Inkjet Printer",
			impacts: {
				climate_change: {
					production: 45,
					distribution: 23,
					use: 12,
					end_of_life: 5
				},
				energy_use: {
					production: 32,
					distribution: 5,
					use: 28,
					end_of_life: 1
				}
			}
		}
		this.showbars();
	}
	draw() {
		this.showbars();
	}
}
