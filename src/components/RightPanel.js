import { useSnapshot } from 'valtio';
import { Picker } from './Picker';
import { SwatchesInfo } from './SwatchesInfo';
import { state } from '../state/State';

export function RightPanel() {
    const snap = useSnapshot(state)
    return (
        <div className="swatches-panel" style={{display: snap.current?"block":"none"}}>
            <SwatchesInfo/>
            <Picker/>
        </div>
    )  
  }
