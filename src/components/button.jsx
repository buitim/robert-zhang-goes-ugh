import { Button } from "@nextui-org/react";
import { db } from '../utils/firebase';
import { ref, set } from 'firebase/database'
import React from "react";
import party from "party-js"

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.onButtonClick = this.onButtonClick.bind(this);
        this.render = this.render.bind(this);
    }
    /* TIL: Functions create their own "this" while arrow functions don't (which is why I
        didn't have to bind anything in TrashHub but did for this) */
    onButtonClick(e) {
        // console.log('[+] Writing to DB');
        // console.log(this.props.ughCount);
        const ughCountRef = ref(db, 'ugh_count');
        const newUghCount = this.props.ughCount + 1;
        set(ughCountRef, newUghCount);
        party.confetti(e.target)
    }

    render() {
        return (
            <>
                <Button size={'xl'} onClick={this.onButtonClick} disabled={this.props.isLoading}>
                    Click me if he ughs again
                </Button>
            </>
        )
    }
}

export default CounterButton;