import {discover, print} from "react-native-epson-printer";

// for discovery
const printers = await discover({interface_type: InterfaceType.LAN});

// for printing
export async function doPrinting(data_obj){
    const response = await print({
        printer: {name: 'Epson', interface_type: 'LAN', mac_address: '12:12:12:12:12:12', target: '192.168.0.100'},
        data: data_obj,
        receipt_copy_count: 1,
        font_size: FontSize.Small, // Small, Regular, Medium, Large
    })
}