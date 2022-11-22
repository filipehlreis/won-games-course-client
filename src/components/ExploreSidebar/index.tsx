import Button from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import Heading from 'components/Heading';
import { Radio } from 'components/Radio';
import * as S from './styles';

const ExploreSidebar = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="secondary" size="small">
        Price
      </Heading>
      <Checkbox name="under-50" label="Under $50" labelFor="under-50" />
      <Checkbox name="under-100" label="Under $100" labelFor="under-100" />
      <Checkbox name="under-150" label="Under $150" labelFor="under-150" />
      <Checkbox name="under-200" label="Under $200" labelFor="under-200" />
      <Checkbox name="free" label="Free" labelFor="free" />
      <Heading lineBottom lineColor="secondary" size="small">
        Sort by
      </Heading>
      <Radio
        id="high-to-low"
        name="sort-by"
        label="High to low"
        labelFor="high-to-low"
        value="high-to-low"
      />
      <Radio
        id="low-to-high"
        name="sort-by"
        label="Low to high"
        labelFor="low-to-high"
        value="low-to-high"
      />

      <Heading lineBottom lineColor="secondary" size="small">
        System
      </Heading>
      <Checkbox name="windows" label="Windows" labelFor="windows" />
      <Checkbox name="mac" label="Mac" labelFor="mac" />
      <Checkbox name="linux" label="Linux" labelFor="linux" />

      <Heading lineBottom lineColor="secondary" size="small">
        Genre
      </Heading>
      <Checkbox name="action" label="Action" labelFor="action" />
      <Checkbox name="adventure" label="Adventure" labelFor="adventure" />
      <Checkbox name="fps" label="FPS" labelFor="fps" />
      <Checkbox name="mmorpg" label="MMORPG" labelFor="mmorpg" />

      <Button fullWidth size="medium">
        Filter
      </Button>
    </S.Wrapper>
  );
};

export default ExploreSidebar;
