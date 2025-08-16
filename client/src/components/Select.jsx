import * as Ariakit from "@ariakit/react";
import clsx from "clsx";
import * as React from "react";

export const Select = React.forwardRef(function Select(
  { children, value, setValue, defaultValue, ...props },
  ref
) {
  const select = Ariakit.useSelectStore({ value, setValue, defaultValue });
  const portalRef = React.useRef(null);
  const selectValue = Ariakit.useStoreState(select, "value");

  // Only call onBlur if the focus is leaving the whole widget.
  const onBlur = (event) => {
    const portal = portalRef.current;
    const { selectElement, popoverElement } = select.getState();
    if (portal?.contains(event.relatedTarget)) return;
    if (selectElement?.contains(event.relatedTarget)) return;
    if (popoverElement?.contains(event.relatedTarget)) return;
    props.onBlur?.(event);
  };

  return (
    <>
      <Ariakit.Select
        ref={ref}
        {...props}
        store={select}
        onBlur={onBlur}
        className={clsx("button", props.className)}
      >
        {selectValue || "Select an item"}
        <Ariakit.SelectArrow />
      </Ariakit.Select>
      <Ariakit.SelectPopover
        store={select}
        modal
        sameWidth
        gutter={4}
        onBlur={onBlur}
        portalRef={portalRef}
        className="popover"
      >
        {children}
      </Ariakit.SelectPopover>
    </>
  );
});

export const SelectItem = React.forwardRef(function SelectItem(props, ref) {
  return (
    <Ariakit.SelectItem
      ref={ref}
      {...props}
      className={clsx("select-item", props.className)}
    />
  );
});
