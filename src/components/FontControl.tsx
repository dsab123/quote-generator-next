import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuotes, setFontFamily } from 'store/quotesSlice';
import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
    ssr: false
  });

export function FontControl() {
    const dispatch = useDispatch();
    const quotesState = useSelector(selectQuotes);
    const quote = quotesState.data[quotesState.selectedIndex];

    return <>
            <div 
                data-tip data-for="fontControl"
                className="bg-red-400 hover:bg-red-600 text-white font-bold font-italic py-2 px-4 rounded xs:mt-2 ml-3">
                f
            </div>
            <ReactTooltip 
                id='fontControl'
                type='error'
                delayHide={300} 
                delayShow={0}
                effect='solid' 
                place={'top'} 
                clickable={true}
                backgroundColor={'bg-red-900'}
                borderColor={'bg-red-900'}
                arrowColor={'darkred'}
            >
                <div className="flex flex-col justify-center items-center xs:p-2 sm:p-4 bg-red-900 rounded">
                    <button
                        className={`${quote?.fontFamily === 'open-sans' ? "bg-red-600" : "bg-red-400 hover:bg-red-600"} text-white font-bold py-2 px-4 rounded xs:mt-2 ml-3`}
                        onClick={() => dispatch(setFontFamily('font-open-sans'))}>
                            <p className="font-open-sans">Open Sans</p>
                    </button>
                    <button
                        className={`${quote?.fontFamily === 'playfair-display' ? "bg-red-600" : "bg-red-400 hover:bg-red-600"} text-white font-bold py-2 px-4 rounded xs:mt-2 ml-3`}
                        onClick={() => dispatch(setFontFamily('font-playfair-display'))}>
                            <p className="font-playfair-display">Playfair Display</p>
                    </button>
                    <button
                        className={`${quote?.fontFamily === 'roboto-slab' ? "bg-red-600" : "bg-red-400 hover:bg-red-600"} text-white font-bold py-2 text-md px-4 rounded xs:mt-2 ml-3`}
                        onClick={() => dispatch(setFontFamily('font-roboto-slab'))}>
                            <p className="font-roboto-slab">Roboto Slab</p>
                    </button>
                </div>
            </ReactTooltip>
        </>;
}