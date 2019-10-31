import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaInitialsColor, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const examplePersona: IPersonaSharedProps = {
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};
export const PersonaInitials: React.FunctionComponent = () => {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Persona {...examplePersona} text="Yuchi Xie" size={PersonaSize.size24} />
    </Stack>
  );
};
