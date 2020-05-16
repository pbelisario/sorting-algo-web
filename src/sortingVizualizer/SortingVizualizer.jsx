import './SortingVizualizer.css'

import React from 'react'
import {getBubbleSortAnimations} from '../sortingAlgoritms/bubblesorter.js'
import {getCountingSortAnimations} from '../sortingAlgoritms/countingsorter.js'
import {getHeapSortAnimations} from '../sortingAlgoritms/heapsorter.js'
import {getMergeSortAnimations} from '../sortingAlgoritms/mergesorter.js'
import {getQuickSortAnimations} from '../sortingAlgoritms/quicksorter.js'

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_SORTING_ELEMENTS = 210;

const PRIMARY_COLOR = '#12094a'; // Cornflower blue

const SECONDARY_COLOR = '#7fd28b'; // rgb(237,100,149)

export default class SortingVizualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = []
        for (let i = 0; i < NUMBER_OF_SORTING_ELEMENTS; i++) {
            let possible = randomIntBetweenRange(0, 2*NUMBER_OF_SORTING_ELEMENTS);
            while(array.includes(possible)) possible = randomIntBetweenRange(0, 2*NUMBER_OF_SORTING_ELEMENTS);
            array.push(possible);
        }

        this.setState({array});
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        const arrayElements = document.getElementsByClassName('array-element');
        for (let i = 0; i < animations.length; i++) {

            const isColorChange = i % 3 !== 2;
            const [elementOneIdx, elementTwoIdx] = animations[i];
            
            if (isColorChange) {
                if (elementOneIdx.length !== undefined) console.log(i, elementOneIdx, elementOneIdx.length)
                const elementOneStyle = arrayElements[elementOneIdx].style;
                const elementTwoStyle = arrayElements[elementTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    elementOneStyle.backgroundColor = color;
                    elementTwoStyle.backgroundColor = color;
                }, 10 * i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const elementOneStyle = arrayElements[elementOneIdx[0]].style;
                    const elementTwoStyle = arrayElements[elementOneIdx[1]].style;
                    elementOneStyle.height = `${elementTwoIdx[0]}px`;
                    elementTwoStyle.height = `${elementTwoIdx[1]}px`;
                }, 10 * i * ANIMATION_SPEED_MS);
                
            }
        }
        
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        const arrayElements = document.getElementsByClassName('array-element');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            const [elementOneIdx, elementTwoIdx] = animations[i];
            const elementOneStyle = arrayElements[elementOneIdx].style;
            if (isColorChange) {
                const elementTwoStyle = arrayElements[elementTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    elementOneStyle.backgroundColor = color;
                    elementTwoStyle.backgroundColor = color;
                }, 5 *i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    elementOneStyle.height = `${elementTwoIdx}px`
                }, 5* i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        const arrayElements = document.getElementsByClassName('array-element');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            const [elementOneIdx, elementTwoIdx] = animations[i];
            
            if (isColorChange) {
                if (elementOneIdx.length !== undefined) console.log(i, elementOneIdx, elementOneIdx.length)
                const elementOneStyle = arrayElements[elementOneIdx].style;
                const elementTwoStyle = arrayElements[elementTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    elementOneStyle.backgroundColor = color;
                    elementTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const elementOneStyle = arrayElements[elementOneIdx[0]].style;
                    const elementTwoStyle = arrayElements[elementOneIdx[1]].style;
                    elementOneStyle.height = `${elementTwoIdx[0]}px`;
                    elementTwoStyle.height = `${elementTwoIdx[1]}px`;
                }, i * ANIMATION_SPEED_MS);
                
            }
        }        
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        const arrayElements = document.getElementsByClassName('array-element');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            const [elementOneIdx, elementTwoIdx] = animations[i];
            
            if (isColorChange) {
                if (elementOneIdx.length !== undefined) console.log(i, elementOneIdx, elementOneIdx.length)
                const elementOneStyle = arrayElements[elementOneIdx].style;
                const elementTwoStyle = arrayElements[elementTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    elementOneStyle.backgroundColor = color;
                    elementTwoStyle.backgroundColor = color;
                }, 5 *i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const elementOneStyle = arrayElements[elementOneIdx[0]].style;
                    const elementTwoStyle = arrayElements[elementOneIdx[1]].style;
                    elementOneStyle.height = `${elementTwoIdx[0]}px`;
                    elementTwoStyle.height = `${elementTwoIdx[1]}px`;
                }, 5 * i * ANIMATION_SPEED_MS);
                
            }
        }        
    }

    countingSort() {
        const animations = getCountingSortAnimations(this.state.array);
        const arrayElements = document.getElementsByClassName('array-element');
        for (let i = 0; i < animations.length; i++) {
            
            const [elementOne, elementTwo] = animations[i];
            
            if (elementOne.length !== 2) {
                const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                const elementStyle = arrayElements[elementOne].style;
                setTimeout(() => {
                    elementStyle.backgroundColor = color;
                    elementStyle.height = `${10*elementTwo}px`;
                }, i * ANIMATION_SPEED_MS)
            } else {
                setTimeout(() =>{
                    const elementStyle = arrayElements[elementOne[0]].style
                    elementStyle.height = `${elementOne[1]}px`;
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    render() {
        const {array} = this.state;
        return (
            <div className="canvas-ish">
                <div className="button-area">
                    <ul className="buttons-list">
                        <li><button onClick={() => this.resetArray()}>Create a New Array</button></li>
                        <li><button onClick={() => this.quickSort()}>Quick Sort</button></li>
                        <li><button onClick={() => this.mergeSort()}>Merge Sort</button></li>
                        <li><button onClick={() => this.bubbleSort()}>Bubble Sort</button></li>
                        <li><button onClick={() => this.heapSort()}>Heap Sort</button></li>
                        <li><button onClick={() => this.countingSort()}>Counting Sort</button></li>
                        <li><a href='http://pbelisario.github.io/portfolio' className='button'><button>Return</button></a></li>
                    </ul>
                </div>
                <div className='array-area'>
                    <ul>
                        { array.map((value, index) => (
                            <li className="array-element" 
                                key={index}
                                style={{
                                    backgroundColor: PRIMARY_COLOR, 
                                    height: `${value}px`,
                                    }}>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

function  randomIntBetweenRange(min, max) {
    return Math.floor(Math.random() * (min + max - 1) + min);
}
/*
function checkSorted(array) {
    for (let i = 0; i < array.length-1; i++) {
        if (array[0] > array[i+1]) return false;
    }
    return true;
}*/