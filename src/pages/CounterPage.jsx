import Layout from "../components/Layout";
import Counter from "../components/Counter/Counter";
import Time from "../components/Time/Time";

function CounterPage() {
    return (
        <Layout>
            <div className="counter-page__wrapper">
                <Time/>
                <Counter/>
            </div>
        </Layout>
    );
}

export default CounterPage;
