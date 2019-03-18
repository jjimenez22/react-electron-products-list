import * as numeral from "numeral";

export default function format(number = 0) {
    return numeral(number).format('0,0.00');
}