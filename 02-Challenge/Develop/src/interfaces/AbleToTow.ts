// interfaces/AbleToTow.ts
import Vehicle from '../classes/Vehicle'

export default interface AbleToTow {
    tow(vehicle: Vehicle): void;
}
