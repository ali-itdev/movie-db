import PropTypes from "prop-types";

// Styles
import { MovieInfoBar as styles } from "../styles";

// Helpers
import { helpers } from "../utils";

const { calcTime, convertMoney } = helpers;
const { Wrapper, Content } = styles;

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export { MovieInfoBar };

/**
 *  TODO: fix: convertMoney(revenue). returns (NaNh NaNm) as the result
 */
