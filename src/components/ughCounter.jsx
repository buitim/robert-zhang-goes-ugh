import React from "react";
import { Container, Row, Spacer, Text, Loading } from "@nextui-org/react";
import { toWords } from "number-to-words/src";
import { db } from '../utils/firebase';
import { ref, onValue } from 'firebase/database'
import CounterButton from "./button";
const textStyle = {
    textGradient: "-45deg, $blue600 0%, $pink600 80%",
    textAlign: "center",
    paddingLeft: '10px',
    paddingRight: '10px'
}

class UghCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ughIsLoading: true,
            ughCount: 0
        }
    }

    updateUghCount(val) {
        this.setState({
            ughIsLoading: false,
            ughCount: val 
        });
    }

    async componentDidMount() {
        const ughCountRef = ref(db, 'ugh_count');

        onValue(ughCountRef, (snapshot) => {
            const val = snapshot.val();
            // console.log(val)
            this.updateUghCount(val)

        })
    }

    render() {
        return (
            <>
                <Container sm>
                    <Row justify="center" align="center">
                        <Text size={45} weight='bold'>
                            ugh.
                        </Text>
                    </Row>
                    <Spacer y={.5} />
                    <Row justify="center" align="center" css={{ textAlign: "center" }}>
                        <Text size={45} weight='semibold'>
                            This man has ugh-ed
                        </Text>
                    </Row>

                    <Row justify="center" align="center">
                        {this.state.ughIsLoading
                        ? <Loading type='points' />
                        : <Text size={45} weight='bold' css={textStyle}>
                            {toWords(this.state.ughCount)}
                        </Text> }
                    </Row>

                    <Row justify="center" align="center" css={{ textAlign: "center" }}>
                        <Text size={45} weight='semibold'>
                            times.
                        </Text>
                    </Row>
                </Container>
                <Spacer y={1} />
                <CounterButton ughCount={this.state.ughCount} isLoading={this.state.ughIsLoading} />
            </>
        )
    };
}

export default UghCounter;
