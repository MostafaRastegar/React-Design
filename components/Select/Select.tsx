import SelectBox from 'react-select';
import { GroupBase } from 'react-select';
import { Props } from 'react-select/base';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { ISelect } from './ISelect';
import Text from '../Text/Text';

const Select = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(
    props: Partial<Props<Option, IsMulti, Group>> & ISelect
) => {
    return (
        <>
            <Text
                className={twMerge('inline-block mb-2', props.labelClassName)}
            >
                {props.label || ''}
            </Text>
            <SelectBox
                {...props}
                options={props.options}
                placeholder={props.placeholder || ''}
                theme={theme => ({ ...theme })}
                styles={{
                    control: defaultStyles => ({
                        ...defaultStyles,
                        '&:hover': {
                            borderColor: '#677887',
                        },
                        width: '100%',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderColor: '#F2F3F5',
                        boxShadow: 'none',
                        fontSize: '0.875rem',
                        borderRadius: '0.75rem',
                        padding: '0.25rem',
                    }),
                    option: (defaultStyles, state) => ({
                        ...defaultStyles,
                        '&:hover': {
                            backgroundColor: '#F2F3F5',
                        },
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        backgroundColor: state.isSelected ? 'transparent' : '',
                        color: '#041320',
                        fontSize: '0.875rem',
                    }),
                    placeholder: defaultStyles => ({
                        ...defaultStyles,
                        color: '#9BA9B3',
                    }),
                    indicatorSeparator: () => ({ display: 'none' }),
                    ...props.styles,
                }}
            />
        </>
    );
};

export default Select;
