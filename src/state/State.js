import { proxy } from 'valtio';

export const state = proxy({
    current:null, 
    colors: {
        blade:"#ffffff",
        counter_lining:"#ffffff",
        tongue_top:"#ffffff",
        laces:"#ffffff",
        sole:"#ffffff",
        ramp_back:"#ffffff",
        lining:"#ffffff",
        back_panel: "#ffffff",
    },
    names: {
        blade:"BLADE",
        counter_lining:"COUNTER LINING",
        tongue_top:"TONGUE",
        laces:"LACES",
        sole:"SOLE",
        ramp_back:"RAMP",
        lining:"LINING",
        back_panel: "BASE PANEL",
    }, 
    rotate: true,
});




