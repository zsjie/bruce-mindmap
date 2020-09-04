import { entries, map } from 'lodash'
export default class BruceMap {
  private container: HTMLDivElement

  constructor(containerId) {
    const container = document.querySelector(containerId)
    if (!container) {
      throw new Error('Board Container Not Found')
    }
    this.container = container
    this.initBoard()
  }

  private initBoard() {
    this.container.setAttribute('style', formatStyleStr({
      position: 'relative',
      overflow: 'auto',
    }))

    const svg = document.createElement('svg')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('version', '1.1')
    svg.setAttribute('style', formatStyleStr({
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      'min-width': '3200px',
      'min-height': '1800px',
      'background-image': 'none',
    }))
    const rect = document.createElement('rect')
    rect.setAttribute('width', '200')
    rect.setAttribute('height', '40')
    rect.setAttribute('fill', '#c70415')
    const text = document.createElement('text')
    text.setAttribute('x', '100')
    text.setAttribute('y', '20')
    text.setAttribute('fill', '#ffffff')
    text.setAttribute('text-anchor', 'middle')
    text.innerHTML = 'Root Topic'
    svg.appendChild(rect)
    svg.appendChild(text)

    this.container.appendChild(svg)
  }

  public greet() {
    console.log('hello world!')
  }
}

function formatStyleStr(styles = {}): string {
  return map(entries(styles), entry => `${entry[0]}: ${entry[1]}`).join('; ')
}
