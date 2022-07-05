from setuptools import setup, find_packages

setup(name='fds.protobuf.stach.v3',
      version='1.0.0',
      description='Stach library in python',
      url='',
      author='analytics-reporting',
      author_email='analytics.api.support@factset.com',
      license='Apache License 2.0',
      install_requires=["protobuf==3.19.4"],
      packages=find_packages(),
      zip_safe=False)
