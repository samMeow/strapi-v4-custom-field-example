import React, { useEffect } from 'react';
import { Select, Stack, Typography, Box, Option, TextInput } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { set } from 'lodash';


const HeathDetailInput = ({
  name,
  onChange,
  value = '{ "class": null }',
  intlLabel,
  disabled,
  error,
  description,
  required
}) => {
  const { formatMessage } = useIntl();
  const parsedValue = JSON.parse(value);

  const handleChange = (n, v) => {
    const nextValue = set(parsedValue, n, v);
    onChange({ target: { name, value: JSON.stringify(nextValue), type: 'json' } })
  }

  return (
    <Stack>
      <Box>
        <Typography variant="h1" fontWeight="bold">
          {formatMessage(intlLabel)}
        </Typography>
        {required && 
          <Typography variant="pi" fontWeight="bold" textColor="danger600">*</Typography>
        }
        {description && 
          <Typography variant="pi">
            {formatMessage(description)}
          </Typography>
        }
      </Box>
      <Select
        label="Class"
        name="class"
        required={required}
        disabled={disabled}
        value={parsedValue.class}
        onChange={v => {
          onChange({
            target: { name, value: JSON.stringify({ class: v }), type: 'json' }
          })
        }}
      >
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      {parsedValue.class === 'fish' && (
        <TextInput
          label="Gill Status"
          name="fish.gill"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={parsedValue.fish?.gill}
        />
      )}
      {parsedValue.class === 'bird' && (
        <TextInput
          label="Wing Status"
          name="bird.wing"
          onChange={e => handleChange(e.target.name, e.target.value)}
          value={parsedValue.bird?.wing}
        />
      )}

      {error && 
        <Typography variant="pi" textColor="danger600">
          {formatMessage({ id: error, defaultMessage: error })}
        </Typography>
      }
    </Stack>
  )
};

export default HeathDetailInput;
