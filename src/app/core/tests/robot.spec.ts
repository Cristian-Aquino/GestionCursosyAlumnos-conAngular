import { bootstrapAppScopedEarlyEventContract } from "@angular/core/primitives/event-dispatch";
import { Robot } from "./robot"


describe("Pruebas de robot", () => {
    let robot = new Robot("Pepito");

    beforeEach(() => {
        const robot = new Robot("Pepito");
    })


    it("Al instanciar el robot el usuario debe ser Matias", () => {
        const robot = new Robot("Matias");
        expect(robot.usuario).toBe("Matias");
    });

    it("Al instanciar a robot, la bateria debe ser 100", () => {
        const robot = new Robot("Jorge");
        expect(robot.bateria).toBe(100);
    });

    it("Al instanciar robot debe tener en sus funcionalidades: 'wifi', 'bluetooth' y 'parlantes'", () => {
        
        expect(robot.funcionalidades).toContain("wifi");
        expect(robot.funcionalidades).toContain("bluetooth");
        expect(robot.funcionalidades).toContain("parlantes");
    });

    it("Al encender el robot debe saludar al usuario", () => {
        const robot = new Robot("Pepito");
        const spyOnLog = spyOn(console, 'log');

        robot.encender()

        expect(spyOnLog).toHaveBeenCalledWith("Hola Pepito");
    });

    it("Al encender el robot, la bateria debe restar en 50", () => {
        const robot = new Robot("Pepito");
        robot.encender()
        expect(robot.bateria).toBe(50);
    });

    it("Si no hay bateria, deberia mostrar un error al intentar lavar ", () => {
        
        const spyOnMostrarErrorBateria = spyOn(robot, 'mostrarErrorBateria');

        robot.encender();
        robot.bateria = 0;
        robot.lavar();

        expect(spyOnMostrarErrorBateria).toHaveBeenCalled();
    });

    it("La funcion lavar debe restar 20 de bateria", () => {
        const robot = new Robot("Pepito");

        robot.encender();
        robot.lavar();

        expect(robot.bateria).toBe(30);
    });

});