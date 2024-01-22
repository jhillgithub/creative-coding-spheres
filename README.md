<a name="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<h1 align="center">Creative Coding: Spheres</h1>

  <p align="center">
    Creative coding experiments with @react-three/fiber and TypeScript
    <br />
    <br />
    ·
    <a href="https://github.com/jhillgithub/mystic-marsh/issues">Report Bug</a>
    ·
    <a href="https://github.com/jhillgithub/mystic-marsh/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## About The Project

This is a sandbox for creative coding in 3D using React and TypeScript.

This code uses custom physics to bounce spheres around within a 3D space defined by a perspective camera. The spheres are colorized using a gradient material based on their position in 3D space. As spheres bounce around, they change color with position. The boundaries of the 3D space are determined by invisible planes set at the camera frustum that is obtained from a custom hook.

The project includes experiments with:

- 3D movement and physics.
- Gradient Materials.
- WebGL shaders.
- Dynamic animation and color.

### Screenshots

![Example][example]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

[![Astro][Astro.js]][Astro-url]

[![Typescript][Typescript]][Typescript-url]

[![React Three Fiber][@react-three/fiber]][R3F-url]

[![Drei][Drei]][Drei-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jhillgithub/creative-coding-spheres.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add mesh instancing for performance
- [ ] Experiment with particles and partical trails
- [ ] Experiment with shaders
  - [ ] Add iridescence
  - [ ] Add animation to shader materials

See the [open issues](https://github.com/jhillgithub/creative-coding-spheres/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/jhillgithub/creative-coding-spheres.svg?style=for-the-badge
[forks-url]: https://github.com/jhillgithub/creative-coding-spheres/network/members
[stars-shield]: https://img.shields.io/github/stars/jhillgithub/creative-coding-spheres.svg?style=for-the-badge
[stars-url]: https://github.com/jhillgithub/creative-coding-spheres/stargazers
[issues-shield]: https://img.shields.io/github/issues/jhillgithub/creative-coding-spheres.svg?style=for-the-badge
[issues-url]: https://github.com/jhillgithub/creative-coding-spheres/issues
[example]: media/spheres.gif
[Astro.js]: https://img.shields.io/badge/astro.js-000000?style=for-the-badge&logo=astrodotjs&logoColor=white
[Astro-url]: https://astro.build/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://reactjs.org/
[@React-three/fiber]: https://img.shields.io/badge/r3f-000000?style=for-the-badge&logo=r3f&logoColor=white
[R3F-url]: https://github.com/pmndrs/react-three-fiber
[Drei]: https://img.shields.io/badge/drei-000000?style=for-the-badge&logo=drei&logoColor=white
[Drei-url]: https://github.com/pmndrs/drei
