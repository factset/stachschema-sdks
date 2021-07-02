from setuptools import setup, find_packages

setup(name='fds.protobuf.stach.v2',
      version='1.0.2',
      description='Stach library in python',
      url='',
      author='analytics-reporting',
      author_email='analytics.api.support@factset.com',
      license='Apache License 2.0',
      install_requires=["protobuf>=3.12.3,<4.0.0"],
      packages=find_packages(),
      zip_safe=False)