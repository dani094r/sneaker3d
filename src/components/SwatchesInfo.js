import { useSnapshot } from 'valtio';
import { state } from '../state/State';

export function SwatchesInfo() {
    const snap = useSnapshot(state)
    return (
        <div className="swatches-info panel">
            <div className="sneaker-element">{snap.names[snap.current]}</div>
            <div className="color-stats">Current color: {snap.colors[snap.current]}</div>
        </div>
    )  
  }
