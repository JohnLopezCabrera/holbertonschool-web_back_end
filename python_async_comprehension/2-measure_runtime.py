#!/usr/bin/env python3
"""Module to take the execution time of four tasks."""

import asyncio
import time
from typing import List

task_1_async = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Executes four tasks in parallel and measures total time."""
    start_time = time.time()
    tasks = [task_1_async() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
