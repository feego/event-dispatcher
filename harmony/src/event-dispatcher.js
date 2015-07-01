/**
 *
 * Registration of polymer event-dispatcher custom element.
 * ECMAScript 6 - using BabelJS traspiler.
 */
Polymer('event-dispatcher', {
    attached() {
        this.callback = (event) => {
            try {
                // Allow content injection from where the dispatcher is used on DOM
                if (this.detail != undefined) {
                    event.detail = this.detail
                }
                // Call handler
                this.handler.bind(this.handlerObservable_.object_)(event)
            } catch (exception) {
                console.log(exception)
            } finally {
                if (this.keepAlive === undefined) {
                    event.stopImmediatePropagation()
                }
            }
        }
        this.parentNode.addEventListener(this.event, this.callback)
    },
    detached() {
        this.parentNode.removeEventListener(this.event, this.callback)
    }
})