#!/usr/bin/env python3
"""Module demonstrating the use of an asynchronous comprehension
    with an async generator."""

import asyncio
from typing import List

# Importing the async_generator function
task_0_function = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Returns  list of 10 random floats utilizing asynchronous
       list.

    Function for  random numbers generated by an
    async generators.
    """
    # Collects numbers asynchronously
    return [i async for i in task_0_function()]
