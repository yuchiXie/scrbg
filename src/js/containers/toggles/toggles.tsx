import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

const stackTokens: IStackTokens = { childrenGap: 10 };

export const ToggleBasic: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Toggle label="The new admin center" defaultChecked onText="On" offText="Off" onChange={_onChange} />
    </Stack>
  );
};

function _onChange(ev: React.MouseEvent<HTMLElement>, checked: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}
// export default ToggleBasicExample;