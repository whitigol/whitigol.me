'use client';

import age from '@/util/age';
import { projects } from '@/util/projects';
import { toolbelt } from '@/util/toolbelt';
import { ActionIcon, Button, Card, Divider, Tooltip } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { IconArrowRight, IconChevronDown, IconRocket, IconTools } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeIndex() {
    const { scrollIntoView, targetRef } = useScrollIntoView({
        offset: 70,
    });
    return (
        <div>
            <section
                className="flex flex-col justify-between gap-y-20 overflow-x-hidden pb-32 md:pb-0"
                style={{
                    // Min height should be 100vh - x2 of var(--app-shell-header-height)
                    minHeight: 'calc(100vh - 7.5rem - 32px)',
                }}
            >
                <div className="tall:min-h-[50vh] mx-auto mt-12 flex min-h-[70vh] w-full max-w-6xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-0">
                    <h1 className="w-full text-5xl font-bold leading-tight md:min-w-[530px]">
                        Hey there! <br />
                        <span>
                            <Tooltip label="Also known as Whitigol ;)">
                                <span className="animate-pulse text-sky-500">{"I'm"} Jared</span>
                            </Tooltip>
                            ,{' '}
                        </span>
                        a frontend development enthusiast <IconRocket className="inline-block animate-spin" />
                    </h1>
                    <div className="font-inter text-gray-light mt-5 w-fit max-w-lg text-base font-medium sm:text-lg md:mt-0 md:text-xl">
                        <p className="text-sm">
                            {"I'm"} a {age()} year-old frontend developer from the United States. I have a strong
                            passion for creating engaging and interactive user interfaces. My journey in the world of
                            web development began several years ago when I discovered my fascination with crafting
                            seamless experiences on the web. Over the years, {"I've"} honed my skills and gained
                            experience in various frontend technologies.
                        </p>
                        <br />
                        <p className="text-sm">
                            In my recent projects, {"I've"} had the opportunity to leverage my expertise in frontend
                            development to craft immersive and visually appealing interfaces. The focus has always been
                            on creating seamless interactions that enhance usability and engage users effectively.
                        </p>
                    </div>
                </div>
            </section>
            <div className="-mt-7 mb-2 flex items-center justify-center">
                <ActionIcon variant="light" className="animate-bounce" onClick={() => scrollIntoView()}>
                    <IconChevronDown size={32} />
                </ActionIcon>
            </div>
            <section className="mt-10" ref={targetRef}>
                <Card
                    className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-2 p-5"
                    radius={'md'}
                    style={{
                        // Gradient outline
                        boxShadow: '0 0 0 1px rgba(255, 255, 225, 0.2)',
                    }}
                >
                    <h1 className="text-2xl font-bold">
                        My Tool Belt <IconTools className="inline-block" />
                    </h1>
                    <span className="text-xs">
                        This is my ever-evolving tech stack.&nbsp;
                        {"I'm"} always learning new things and trying to improve my skills.
                    </span>
                    {/* Grid of icons that are 100px in size */}
                    <div className="mb-5 mt-5 grid grid-cols-4 gap-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-8">
                        {toolbelt.map((tool, i) => (
                            <div className="flex items-center justify-center" key={i}>
                                <Tooltip key={i} label={tool.name}>
                                    <Image
                                        src={tool.icon}
                                        alt={tool.name}
                                        width={55}
                                        height={55}
                                        // if tool.white is true, then the icon is white (they are svg)
                                        style={{
                                            filter: tool.white ? 'invert(1)' : 'none',
                                        }}
                                    />
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>
            <section className="mt-7">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-5 px-5">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <p>Over the years, {"I've"} embarked on many projects. Here are some of my favorites.</p>
                    {/* Grid 2 */}
                    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
                        {projects.map(
                            (project, i) =>
                                i < 4 &&
                                project.feature && (
                                    <Card
                                        key={i}
                                        className="flex flex-col justify-between gap-2"
                                        shadow="sm"
                                        radius="md"
                                    >
                                        <Image
                                            src={project.image}
                                            width={1920}
                                            height={1080}
                                            alt={project.name}
                                            className="h-auto w-full rounded-md"
                                        />
                                        <Divider />
                                        <h1 className="text-xl font-bold">{project.name}</h1>
                                        <Divider />
                                        <p>{project.description}</p>
                                        <Link href={project.url} target="_blank" className="w-full">
                                            <Button
                                                className="!w-full"
                                                variant="light"
                                                rightSection={<IconArrowRight />}
                                            >
                                                View Project
                                            </Button>
                                        </Link>
                                    </Card>
                                ),
                        )}
                    </div>
                    <Link href="/projects">
                        <Button variant="light" color="cyan" className="!w-full" rightSection={<IconArrowRight />}>
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
