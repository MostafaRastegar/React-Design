import Head from 'next/head';
import React from 'react';
import Button from '../components/Button/Button';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Switch from '../components/Switch/Switch';
import Range from '../components/Range/Range';
import Radio from '../components/Radio/Radio';
import Checkbox from '../components/Checkbox/Checkbox';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';

interface IFormValues {
    name: string;
    male: boolean;
    north: 'yes' | 'no';
    burger: boolean;
    foods: Record<string, any> | null;
    age: [0, 1000];
    price: number;
}

export default function Home() {
    const {
        handleSubmit,
        watch,
        control,
        formState: { defaultValues },
    } = useForm<IFormValues>({
        defaultValues: {
            male: false,
            name: '',
            north: 'no',
            burger: false,
            foods: null,
            age: [0, 1000],
            price: 0,
        },
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <main className='mx-auto flex h-screen w-screen flex-col items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange } }) => (
                            <Input
                                placeholder='First Name'
                                label='First Name'
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange } }) => (
                            <Select
                                instanceId='food'
                                label='Foods'
                                placeholder='please chooce a food'
                                options={[
                                    {
                                        label: 'Pizza',
                                        value: 0,
                                    },
                                    {
                                        label: 'Burger',
                                        value: 1,
                                    },
                                    {
                                        label: 'Pasta',
                                        value: 2,
                                    },
                                ]}
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='male'
                        render={({ field: { onChange } }) => (
                            <Checkbox label='Male' onChange={onChange} />
                        )}
                    />

                    <Controller
                        control={control}
                        name='north'
                        render={({ field: { onChange } }) => (
                            <Radio
                                checked={watch('north') === 'no'}
                                label='No'
                                value='no'
                                id='n'
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='north'
                        render={({ field: { onChange } }) => (
                            <Radio
                                checked={watch('north') === 'yes'}
                                label='Yes'
                                value='yes'
                                id='y'
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='burger'
                        rules={{
                            required: 'REQ',
                        }}
                        render={({ field: { onChange } }) => (
                            <Switch label='Burger' onChange={onChange} />
                        )}
                    />
                    <Controller
                        control={control}
                        name='price'
                        render={({ field: { onChange } }) => (
                            <Range
                                isSingle={true}
                                value={defaultValues?.price}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div>Whuuuuuuuuuuu</div>
                    <Controller
                        control={control}
                        name='age'
                        render={({ field: { onChange } }) => (
                            <Range
                                isSingle={false}
                                value={[
                                    defaultValues?.age?.[0] || 0,
                                    defaultValues?.age?.[1] || 0,
                                ]}
                                step={1}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Button label='Submit' type='submit' />
                </form>
            </main>
        </>
    );
}
